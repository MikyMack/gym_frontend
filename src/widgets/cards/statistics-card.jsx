import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import {
  useMaterialTailwindController
} from "../../context/index";

export function StatisticsCard({ color, icon, title, value, footer }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType} =
    controller;
  return (
    <Card className={` shadow-sm  ${
      sidenavType === "dark" ? " bg-black bg-opacity-75" : "border border-blue-gray-100 bg-white"
    }`}>
      <CardHeader
        variant="gradient"
        // color="red"
        floated={false}
        shadow={false}
        className={`absolute grid h-12 rounded-full w-12 place-items-center ${
          sidenavType === "dark"? "bg-red-700" : "bg-black"
        }`}
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right ">
        <Typography variant="small" className={`font-normal ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
          {title}
        </Typography>
        <Typography variant="h4" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-gray-700 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
