"use client";

import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./AdminLogin.module.scss";
import Main from "../Main";
import Login from "../Login";
import Register from "../Register";
import { useAppDispatch } from "@/redux/hooks";
import { Api } from "@/services/api";
import { setUserData } from "@/redux/slices/user";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";

interface AdminLoginProps {
  // onClose: () => void;
  // open: boolean;
  // handleClose: () => void;
}

const AdminLogin: FC<AdminLoginProps> = () => {
  const [formType, setFormType] = useState<"main" | "login" | "register">(
    "main"
  );

  const { user } = useSelector((state: AppState) => state.userReducer);

  const [authVisible, setAuthVisible] = useState(true);
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
    <Dialog
      open={authVisible}
      maxWidth="xs"
      fullWidth
      className={styles.authLogin}
    >
      <DialogContent>
        <Login />
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
