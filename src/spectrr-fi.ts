import { BigInt } from "@graphprotocol/graph-ts";
import {
  SpectrrFi,
  BuyOfferAccepted,
  BuyOfferBuyerAddressChanged,
  BuyOfferCanceled,
  BuyOfferCollateralAdded,
  BuyOfferCreated,
  BuyOfferForfeited,
  BuyOfferLiquidated,
  BuyOfferRepaid,
  BuyOfferSellerAddressChanged,
  SaleOfferAccepted,
  SaleOfferBuyerAddressChanged,
  SaleOfferCanceled,
  SaleOfferCollateralAdded,
  SaleOfferCreated,
  SaleOfferForfeited,
  SaleOfferLiquidated,
  SaleOfferRepaid,
  SaleOfferSellerAddressChanged,
} from "../generated/SpectrrFi/SpectrrFi";
import { SaleOffer, BuyOffer } from "../generated/schema";

// Offer status codes
const open = 0;
const accepted = 1;
const closed = 2;

export function handleBuyOfferSellerAddressChanged(
  event: BuyOfferSellerAddressChanged
): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.seller = event.params.newAddress;

  offer.save();
}

export function handleBuyOfferBuyerAddressChanged(
  event: BuyOfferBuyerAddressChanged
): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.buyer = event.params.newAddress;

  offer.save();
}

export function handleBuyOfferAccepted(event: BuyOfferAccepted): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.seller = event.params.seller;
  offer.status = accepted;
  offer.timeAccepted = event.params.timestamp;

  offer.save();
}

export function handleBuyOfferCanceled(event: BuyOfferCanceled): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleBuyOfferCollateralAdded(
  event: BuyOfferCollateralAdded
): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);
  let contract = SpectrrFi.bind(event.address);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.collateral = contract.buyOffers(event.params.offerId).value5;

  offer.save();
}

export function handleBuyOfferCreated(event: BuyOfferCreated): void {
  let offer = new BuyOffer(event.params.offerId.toString());
  let contract = SpectrrFi.bind(event.address);

  offer.buying = event.params.buying;
  offer.buyFor = event.params.buyingFor;
  offer.collateral = contract.buyOffers(event.params.offerId).value5;
  offer.repayInSec = event.params.repayInSeconds;
  offer.buyingId = event.params.buyingId;
  offer.buyForId = event.params.buyingForId;
  offer.collateralId = event.params.collateralId;
  offer.buyer = event.params.buyer;
  offer.status = open;
  offer.exchangeRate = event.params.exRate;
  offer.timeCreated = event.block.timestamp;
  offer.timeAccepted = BigInt.fromI32(0);

  offer.save();
}

export function handleBuyOfferForfeited(event: BuyOfferForfeited): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleBuyOfferLiquidated(event: BuyOfferLiquidated): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleBuyOfferRepaid(event: BuyOfferRepaid): void {
  let id = event.params.offerId.toString();
  let offer = BuyOffer.load(id);
  let contract = SpectrrFi.bind(event.address);

  if (offer == null) {
    offer = new BuyOffer(id);
  }

  if (event.params.byPart == true) {
    offer.buyFor = contract.buyOffers(event.params.offerId).value4;
  } else {
    offer.status = closed;
  }

  offer.save();
}

export function handleSaleOfferSellerAddressChanged(
  event: SaleOfferSellerAddressChanged
): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.seller = event.params.newAddress;

  offer.save();
}

export function handleSaleOfferBuyerAddressChanged(
  event: SaleOfferBuyerAddressChanged
): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.buyer = event.params.newAddress;

  offer.save();
}

export function handleSaleOfferAccepted(event: SaleOfferAccepted): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.collateral = event.params.collateral;
  offer.collateralId = event.params.collateralId;
  offer.buyer = event.params.buyer;
  offer.status = accepted;
  offer.timeAccepted = event.params.timestamp;

  offer.save();
}

export function handleSaleOfferCanceled(event: SaleOfferCanceled): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleSaleOfferCollateralAdded(
  event: SaleOfferCollateralAdded
): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);
  let contract = SpectrrFi.bind(event.address);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.collateral = contract.saleOffers(BigInt.fromString(id)).value5;

  offer.save();
}

export function handleSaleOfferCreated(event: SaleOfferCreated): void {
  let offer = new SaleOffer(event.params.offerId.toString());

  offer.selling = event.params.selling;
  offer.sellFor = event.params.sellingFor;
  offer.repayInSec = event.params.repayInSeconds;
  offer.sellingId = event.params.sellingId;
  offer.sellForId = event.params.sellingForId;
  offer.seller = event.params.seller;
  offer.status = open;
  offer.exchangeRate = event.params.exRate;
  offer.timeCreated = event.block.timestamp;
  offer.timeAccepted = BigInt.fromI32(0);
  offer.collateral = BigInt.fromI32(0);

  offer.save();
}

export function handleSaleOfferForfeited(event: SaleOfferForfeited): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleSaleOfferLiquidated(event: SaleOfferLiquidated): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  offer.status = closed;

  offer.save();
}

export function handleSaleOfferRepaid(event: SaleOfferRepaid): void {
  let id = event.params.offerId.toString();
  let offer = SaleOffer.load(id);
  let contract = SpectrrFi.bind(event.address);

  if (offer == null) {
    offer = new SaleOffer(id);
  }

  if (event.params.byPart == true) {
    offer.sellFor = contract.saleOffers(event.params.offerId).value4;
  } else {
    offer.status = closed;
  }

  offer.save();
}
