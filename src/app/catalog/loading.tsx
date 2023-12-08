import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div
      style={{
        margin: "0 auto",
        height: "100%",
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="inherit" />
      <div>Идет загрузка...</div>
    </div>
  );
}
