import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
`
export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`
export const BannerLeftPart = styled.div`
  width: 50%;
`
export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
`
export const BannerButton = styled.button`
  padding-left: 10px;
`
export const BannerCloseButton = styled.button`
  border: none;
  height: 25px;
`
export const SearchIconContainer = styled.div`
  display: flex;
`
export const SearchContainer = styled.button`
  display: flex;
`
export const SearchInput = styled.input`
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
`

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`

export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
`

export const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  font-family: 'Roboto';
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  font-family: 'Roboto';
  align-self: flex-end;
`
export const ModalDesc = styled.div`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
