import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import Images from "./components/Images";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    getSingleProduct,
    isSingleLoading,
    singleProduct,
  } = useProductContext();

  const {
    name,
    company,
    price,
    image,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;
  console.log(singleProduct);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) return <div>Loading...</div>;

  return (
    <Wrapper>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3">
            <div
              className="product-data-warranty "
              style={{ position: "fixed" }}
            >
              <div className="product-warranty-data">
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <p>Thapa Delivered </p>
              </div>

              <div className="product-warranty-data">
                <p>2 Year Warranty </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {/* product Images  */}
            <div className="product-images">
              <Images imgs={image} />
            </div>
          </div>
          <div className="col-sm-3">
            {/* product dAta  */}
            <div className="product-data" style={{ position: "fixed" }}>
              <h2>{name}</h2>
              <p>{description}</p>
              <p className="product-data-price">
                MRP:
                <del>{price}</del>
              </p>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand :<span> {company} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 8rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images img {
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
