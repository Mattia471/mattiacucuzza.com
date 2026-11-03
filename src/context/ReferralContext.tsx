import { useEffect, useState, type ReactNode } from 'react';
import { ReferralContext } from './referral';

type ReferralState = {
  discount: number;
  referralCode?: string;
};

const validCodes: Record<string, number> = {
  nga_2026: 0.1,
};

const readInitialReferral = (): ReferralState => {
  if (typeof window === 'undefined') {
    return { discount: 0, referralCode: undefined };
  }

  const params = new URLSearchParams(window.location.search);
  const refCode = params.get('ref')?.toLowerCase();

  if (refCode && validCodes[refCode]) {
    return {
      discount: validCodes[refCode],
      referralCode: refCode,
    };
  }

  const storedDiscount = sessionStorage.getItem('temp_discount');
  const storedCode = sessionStorage.getItem('temp_ref_code');

  if (!storedDiscount || !storedCode) {
    return { discount: 0, referralCode: undefined };
  }

  const parsedDiscount = Number.parseFloat(storedDiscount);

  if (!Number.isFinite(parsedDiscount) || parsedDiscount <= 0) {
    return { discount: 0, referralCode: undefined };
  }

  return {
    discount: parsedDiscount,
    referralCode: storedCode,
  };
};

export const ReferralProvider = ({ children }: { children: ReactNode }) => {
  const [referral] = useState<ReferralState>(readInitialReferral);

  useEffect(() => {
    if (referral.discount > 0 && referral.referralCode) {
      sessionStorage.setItem('temp_discount', referral.discount.toString());
      sessionStorage.setItem('temp_ref_code', referral.referralCode);
      return;
    }

    sessionStorage.removeItem('temp_discount');
    sessionStorage.removeItem('temp_ref_code');
  }, [referral]);

  return (
    <ReferralContext.Provider
      value={{
        discount: referral.discount,
        hasDiscount: referral.discount > 0,
        referralCode: referral.referralCode,
      }}
    >
      {children}
    </ReferralContext.Provider>
  );
};
