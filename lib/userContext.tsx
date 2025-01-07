// guardar session y profile

import { Session } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase";

export interface UserProfile {
  username: string;
  avatarUrl: string;
}

export interface UserInfo {
  session: Session | null;
  profile: UserProfile | null;
}

const UserContext = createContext<UserInfo>({
  session: null,
  profile: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    session: null,
    profile: null,
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
            setUserInfo({...userInfo, session})
    });
    supabase.auth.onAuthStateChange((_event, session) => {
        setUserInfo({session, profile: null})
    })
  }, []);

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  )
}

export function useUserInfo(){
    return useContext(UserContext)
}
