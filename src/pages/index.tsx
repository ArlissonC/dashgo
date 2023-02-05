import { Input } from "@/components/Form/Input";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<FieldValues> = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            id="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
            {...register("email")}
          />
          <Input
            label="Senha"
            type="password"
            id="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isLoading}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
