import React, { useState } from "react";
import Link from "next/link";

import { Difficulty, type Problem } from "../types/problem-data";

import {
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

interface TagsBoxProps {
  difficulty: Difficulty;
  typeTags: string[];
}

const TagsBox: React.FC<TagsBoxProps> = ({ difficulty, typeTags }) => {
  const bgColor =
    difficulty === "Easy"
      ? "#2A3C3B"
      : difficulty === "Medium"
      ? "#493F2A"
      : "#482C30";

  const textColor =
    difficulty === "Easy"
      ? "#00B9A3"
      : difficulty === "Medium"
      ? "#FEC11C"
      : "#FE365F";

  return (
    <Flex width="100%" flexWrap="wrap" alignItems="center" gap={2}>
      <Box
        // flex={1}
        px={3}
        py={1}
        borderRadius="20px"
        bgColor={bgColor}
        textColor={textColor}
      >
        <Text
          fontSize="14px"
          whiteSpace="nowrap"
          align="center"
          fontWeight="bold"
        >
          {difficulty}
        </Text>
      </Box>
      {typeTags.map((typeTag) => (
        <Box
          // flex={1}
          px={3}
          py={1}
          bgColor="#3F3E3F"
          borderRadius="20px"
          textColor="#C3C4C8"
          key={typeTag}
        >
          <Text fontSize="14px" whiteSpace="nowrap" align="center">
            {typeTag}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

interface ProblemBoxProps {
  problem: Problem;
}

const ProblemBox: React.FC<ProblemBoxProps> = ({
  problem: { name, link, occurence, tags, otherCompanies, difficulty },
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Popover
        isLazy
        trigger="hover"
        openDelay={10}
        closeDelay={10}
        onOpen={() => console.log("hello")}
      >
        <PopoverTrigger>
          <Flex
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            position="relative"
            userSelect="none"
            cursor="pointer"
            height="100%"
            width="100%"
            alignItems="center"
            justifyContent="center"
            zIndex={1}
          >
            <Link href={link} target="_blank">
              <Text fontSize="12px" textAlign="center">
                {name}{" "}
                <ExternalLinkIcon
                  // visibility={isHovering ? "visible" : "hidden"}
                  display={isHovering ? "inline" : "none"}
                />
              </Text>
            </Link>
            {/* <Flex alignItems="center" gap={1}>
              <Text fontSize="12px" textAlign="center">
                {name}
              </Text>
              {isHovering ? <ExternalLinkIcon /> : <></>}
            </Flex> */}
          </Flex>
        </PopoverTrigger>
        <PopoverContent
          p={1}
          bg="#282828"
          textColor="white"
          borderColor="#282828"
        >
          <PopoverArrow bg="#282828" />
          {/* <PopoverCloseButton /> */}
          <PopoverHeader borderBottomWidth={0}>
            <TagsBox difficulty={difficulty} typeTags={tags} />
          </PopoverHeader>
          {/* <PopoverBody>
          </PopoverBody> */}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ProblemBox;
