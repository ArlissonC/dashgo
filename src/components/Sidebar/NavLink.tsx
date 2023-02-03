import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface Props extends LinkProps {
  icon: ElementType;
  children: string;
}

const NavLink = ({ icon, children, ...rest }: Props) => {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
