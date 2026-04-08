import React, { createContext, useContext, useEffect, useState } from 'react';

interface ReferralContextType {
    discount: number;
    hasDiscount: boolean;
    referralCode?: string;
}

const ReferralContext = createContext<ReferralContextType>({
    discount: 0,
    hasDiscount: false,
    referralCode: undefined
});

export const ReferralProvider = ({ children }: { children: React.ReactNode }) => {
    const [discount, setDiscount] = useState(0);
    const [referralCode, setReferralCode] = useState<string | undefined>(undefined);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const refCode = params.get('ref')?.toLowerCase();

        const validCodes: Record<string, number> = {
            'nga_2026': 0.1,
        };

        if (refCode && validCodes[refCode]) {
            // Se entra col link, imposta lo sconto
            setDiscount(validCodes[refCode]);
            setReferralCode(refCode);
            sessionStorage.setItem('temp_discount', validCodes[refCode].toString());
            sessionStorage.setItem('temp_ref_code', refCode);
        } else {
            // Se entra senza link, controlla se c'è qualcosa nella sessione attuale
            const sDiscount = sessionStorage.getItem('temp_discount');
            const sCode = sessionStorage.getItem('temp_ref_code');

            if (sDiscount && sCode) {
                setDiscount(parseFloat(sDiscount));
                setReferralCode(sCode);
            } else {
                // Altrimenti, pulizia totale
                setDiscount(0);
                setReferralCode(undefined);
            }
        }
    }, []);

    return (
        <ReferralContext.Provider value={{
            discount,
            hasDiscount: discount > 0,
            referralCode
        }}>
            {children}
        </ReferralContext.Provider>
    );
};

export const useReferral = () => useContext(ReferralContext);