import {
  RestaurantCard,
  withComponentLabel,
} from "./../components/RestaurantCard";
import { render, screen } from "@testing-library/react";
import { rescardMock } from "./../mocks/rescardMock";
import "@testing-library/jest-dom";

it("should render Restaurant card component with props data", () => {
  render(
    <RestaurantCard
      name={rescardMock.info.name}
      cuisines={rescardMock.info.cuisines}
      avgRating={rescardMock.info.avgRating}
      costForTwo={rescardMock.info.costForTwo}
      deliveryTime={rescardMock.info.sla.deliveryTime}
      cloudinaryImageId={rescardMock.info.cloudinaryImageId}
    />
  );

  expect(screen.getByText(/Test Restaurant/i)).toBeInTheDocument();

  expect(screen.getByText(/Italian, Mexican/i)).toBeInTheDocument();

  expect(screen.getByText(/4.5 ⭐/i)).toBeInTheDocument();

  expect(screen.getByText(/30 mins/i)).toBeInTheDocument();

  expect(screen.getByText(/Cost for Two: ₹500/i)).toBeInTheDocument();
});

it("should render Restaurant card component with promoted label", () => {
  const PromotedRestaurantCard = withComponentLabel(RestaurantCard);

  render(
    <PromotedRestaurantCard
      name={rescardMock.info.name}
      cuisines={rescardMock.info.cuisines}
      avgRating={rescardMock.info.avgRating}
      costForTwo={rescardMock.info.costForTwo}
      deliveryTime={rescardMock.info.sla.deliveryTime}
      cloudinaryImageId={rescardMock.info.cloudinaryImageId}
    />
  )
    const promotedLabel = screen.getByText((content) =>
        content.toLowerCase().includes("promoted")
      );
      expect(promotedLabel).toBeInTheDocument();
    

  expect(screen.getByText(/Test Restaurant/i)).toBeInTheDocument();

  expect(screen.getByText(/Italian, Mexican/i)).toBeInTheDocument();

  expect(screen.getByText(/4.5 ⭐/i)).toBeInTheDocument();

  expect(screen.getByText(/30 mins/i)).toBeInTheDocument();

  expect(screen.getByText(/Cost for Two: ₹500/i)).toBeInTheDocument();

});
