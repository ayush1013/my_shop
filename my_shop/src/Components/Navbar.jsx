import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <Flex
      w={"100%"}
      h={["50px","66px","66px"]}
      boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      alignItems={"center"}
      justifyContent={"space-between"}
      boxSizing="border-box"
      p={["0px 5px","0px 5px","0px 20px"]}
      color="#EBE596"
      bgColor={"#828282"}
      position="fixed" 
    >
      <Box w="60px">
        <Image
          w={["70%","100%","100%"]}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhpGxGRJEyKaGFpubb4YD89LDsc7CTbX10fh8MsxZbymh_nbuh8CcI-DbFbfU6KT0NF0&usqp=CAU"
        />
      </Box>
      <Box
        fontSize={["11px","12px","18px"]}
        fontWeight="bold"
        display={["none", "block", "block"]}
      >
        <Link> Smart Watches </Link>
      </Box>
      <Flex alignItems={"center"} w="45%" display={["none", "flex", "flex"]}>
        <Input type="text" placeholder="Search Item" w="90%" color="black" variant={"none"} />
        <button w="50px">
          <Image
            w={[ "30px","40px","40px"]}
            opacity={"0.6"}
            src="https://img.icons8.com/fluency-systems-filled/256/search.png"
          />
        </button>
      </Flex>
      <Box display={["block", "none", "none"]}>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#">
            <Image
              w={[ "30px","40px","40px"]}
              opacity={"0.6"}
              src="https://img.icons8.com/fluency-systems-filled/256/search.png"
            />
          </button>
        </div>
      </Box>
      {/* border="1px solid black" */}
      <Flex
        fontSize={["11px","12px","18px"]}
        fontWeight="bold"
        justifyContent="space-between"
        w={["80px","80px","120px"]}
        display={["none", "flex", "flex"]}
      >
        <Link>Login</Link>
        <Text>|</Text>
        <Link>Signup</Link>
      </Flex>
      <Box w="40px">
        <Link>
          <Image
            cursor={"pointer"}
            w={[ "30px","40px","40px"]}
            src="https://img.icons8.com/windows/256/filled-heart.png"
            opacity={"0.6"}
          />
        </Link>
      </Box>
      <Box w="40px">
        <Link>
          <Image
            cursor={"pointer"}
            w={[ "30px","40px","40px"]}
            src="https://img.icons8.com/sf-ultralight-filled/256/shopping-cart.png"
            opacity={"0.6"}
          />
        </Link>
      </Box>

      <Box
        fontSize={["11px","12px","18px"]}
        fontWeight="bold"
        display={["none", "block", "block"]}
      >
        <Link>Orders</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
