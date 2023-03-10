import { Input } from "@/components/Form/Input";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

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
            error={errors.email}
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
            error={errors.password}
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
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
