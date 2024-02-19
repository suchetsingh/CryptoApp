import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../src/main.jsx";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import CoinCard from "./CoinCard.jsx";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  };
  const btns = new Array(132).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? " €" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${pages}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, pages]);

  if (error) return <ErrorComponent message="Error while fetching coins" />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup
            value={currency}
            onChange={(value) => setCurrency(value)}
            p={8}
          >
            <HStack spacing={4}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                symbol={i.symbol}
                url={i.url}
                price={i.current_price}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={8}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
