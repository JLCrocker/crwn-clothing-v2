import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  height: 23em;
  align-items: center;
  position: relative;

  img {
    width: 95%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 0.55em;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 16rem;
    font-size: 0.75rem;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`;
