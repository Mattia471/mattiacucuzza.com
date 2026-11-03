import { createContext, useContext } from 'react';

export type ReferralContextType = {
  discount: number;
  hasDiscount: boolean;
  referralCode?: string;
};

export const ReferralContext = createContext<ReferralContextType>({
  discount: 0,
  hasDiscount: false,
  referralCode: undefined,
});

export const useReferral = () => useContext(ReferralContext);
