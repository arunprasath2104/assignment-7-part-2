import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ItemLink = styled(Link)`
  border-radius: 1px;
`
export const GamingListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const GamingThumbNailImage = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
