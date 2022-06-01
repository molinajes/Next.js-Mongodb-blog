import { StyledButton } from "components";

export function renderButton(label: string, fontSize = 16) {
  return (
    <StyledButton
      label={label}
      style={{
        paddingLeft: 0,
        textAlign: "left",
        justifyContent: "left",
        textTransform: "capitalize",
      }}
      sx={{ fontSize: fontSize }}
    />
  );
}