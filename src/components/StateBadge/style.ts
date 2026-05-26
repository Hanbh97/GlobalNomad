import styled from "styled-components";

const Badge = styled.span<{
  color: string;
  bgColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  border-radius: 999px;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};

  font-size: "var(--text-13)";
  font-weight: bold;
  letter-spacing: -0.5px;
  line-height: 1;
  cursor: default;
`;

export default Badge;
