import InputMask from "react-input-mask";

const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;
  
    return <InputMask ref={inputRef} mask="9 (999) 999-99-99" {...props} />;
  }

export default TextMaskCustom