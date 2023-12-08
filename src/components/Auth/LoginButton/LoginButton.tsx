"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setUserData } from "@/redux/slices/user";
import { useEffect, useState } from "react";
import AuthPopup from "../AuthPopup";
import styles from "./LoginButton.module.scss";
import { Api } from "@/services/api";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

const LoginButton = () => {
  const { user } = useSelector((state: AppState) => state.userReducer);
  const [authVisible, setAuthVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const [popupVisible, setPopupVisible] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    Api()
      .users.getMe()
      .then((res) => {
        dispatch(setUserData(res));
      });
  }, [user ? user.id : ""]);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  useEffect(() => {
    if (authVisible && user) {
      setAuthVisible(false);
    }
  }, [authVisible, user]);

  const handleChangeInput = async (e: any) => {
    setPopupVisible(true);
  };

  const handleLogout = async () => {
    Api()
      .users.logout()
      .then((res) => {
        dispatch(setUserData(null));
      });
    setLogoutVisible(false);
  };

  return (
    <>
      {user ? (
        <div className={styles.userInfo}>
          <div
            onClick={() => setLogoutVisible(!logoutVisible)}
            className={styles.userEmail}
          >
            {user.email}
          </div>
          {logoutVisible && (
            <div className={styles.logout} onClick={handleLogout}>
              Выйти
            </div>
          )}
        </div>
      ) : (
        <div onClick={openAuthDialog} className={styles.login}>
          Войти
        </div>
      )}

      <AuthPopup
        onClose={closeAuthDialog}
        open={authVisible}
        handleClose={closeAuthDialog}
      />
    </>
  );
};

export default LoginButton;
