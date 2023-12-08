"use client";

import { OutputData } from "@editorjs/editorjs";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

import styles from "./Editor.module.scss";
import { Button } from "@mui/material";

// important that we use dynamic loading here
// editorjs should only be rendered on the client side.
const EditorBlock = dynamic(() => import("./Editor"), {
  ssr: false,
});

const CreatePost: NextPage = () => {
  const [data, setData] = useState<OutputData>();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Написать пост</Button>
      {visible && (
        <div className={styles.editor}>
          <EditorBlock
            data={data}
            onChange={setData}
            holder="editorjs-container"
          />
        </div>
      )}
    </>
  );
};

export default CreatePost;
