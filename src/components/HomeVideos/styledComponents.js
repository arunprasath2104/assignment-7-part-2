import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosImage = styled.img`
  width: 200px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
`
export const RetryButton = styled.button`
  border: none;
  background: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
