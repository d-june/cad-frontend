import { FC, useEffect, useRef, useState } from "react";
import useOnScreen from "@/app/hooks/use-on-screen";

import styles from "./LoadableImage.module.scss";

type LoadableImageProps = {
  src: string;
  alt?: string;
  onLoad?(): void;
  className?: string;
};

const LoadableImage: FC<LoadableImageProps> = ({
  src,
  alt = "",
  onLoad = () => {},
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isVisible, onLoad, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={
        isLoaded
          ? styles.containerLoaded + " " + styles.container
          : styles.container
      }
    >
      {(isVisible || isLoaded) && (
        <img
          ref={imageRef}
          className={
            isLoaded ? styles.imageLoaded + " " + styles.image : styles.image
          }
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};

export default LoadableImage;
