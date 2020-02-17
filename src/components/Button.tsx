import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  className?: string
  children: JSX.Element | string | number
  onClick?: (e: React.SyntheticEvent) => void
  kind?: 'primary' | 'default' // | 'alert' | 'danger' TODO: implement these buttons
  size?: 'l' | 'm' | 's' | 'xs'
}

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <div onClick={onClick} className={`br2 ${className}`}>
      {children}
    </div>
  )
}

export default styled(Button)<Props>`
  padding: 4px 12px;
  // border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s, color 0.3s;
  font-size: 14px;
  text-align: center;
  ${({ kind }) =>
    ({
      primary: css`
        background-color: #ff8f1c;
        color: white;
        &:hover {
          background-color: #fb9a59;
        }
      `,
      default: css`
        border: 1px solid rgb(200, 200, 200);
        color: rgb(50, 50, 50);
        &:hover {
          border: 1px solid #fb9a59;
          color: #fb9a59;
        }
      `
    }[kind || 'default'])}
  ${({ size }) =>
    ({
      l: css`
        font-size: 18px;
        padding: 6px 16px;
      `,
      m: css`
        font-size: 14px;
        padding: 8px 12px;
      `,
      s: css`
        font-size: 14px;
      `,
      xs: css`
        font-size: 10px;
        padding: 4px 8px;
      `
    }[size || 'm'])}
`
