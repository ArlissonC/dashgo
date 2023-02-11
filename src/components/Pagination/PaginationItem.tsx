import { Button } from "@chakra-ui/react";

interface Props {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({ isCurrent = false, number, onPageChange }: Props) => {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
