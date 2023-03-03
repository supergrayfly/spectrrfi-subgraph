import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BuyOfferAccepted,
  BuyOfferBuyerAddressChanged,
  BuyOfferCanceled,
  BuyOfferCollateralAdded,
  BuyOfferCreated,
  BuyOfferForfeited,
  BuyOfferLiquidated,
  BuyOfferRepaid,
  BuyOfferSellerAddressChanged,
  FeeAddressChanged,
  NewTokenAdded,
  OwnershipTransferred,
  SaleOfferAccepted,
  SaleOfferBuyerAddressChanged,
  SaleOfferCanceled,
  SaleOfferCollateralAdded,
  SaleOfferCreated,
  SaleOfferForfeited,
  SaleOfferLiquidated,
  SaleOfferRepaid,
  SaleOfferSellerAddressChanged
} from "../generated/SpectrrFi/SpectrrFi"

export function createBuyOfferAcceptedEvent(
  offerId: BigInt,
  seller: Address,
  timestamp: BigInt
): BuyOfferAccepted {
  let buyOfferAcceptedEvent = changetype<BuyOfferAccepted>(newMockEvent())

  buyOfferAcceptedEvent.parameters = new Array()

  buyOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  buyOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferAcceptedEvent
}

export function createBuyOfferBuyerAddressChangedEvent(
  offerId: BigInt,
  newAddress: Address
): BuyOfferBuyerAddressChanged {
  let buyOfferBuyerAddressChangedEvent = changetype<
    BuyOfferBuyerAddressChanged
  >(newMockEvent())

  buyOfferBuyerAddressChangedEvent.parameters = new Array()

  buyOfferBuyerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferBuyerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return buyOfferBuyerAddressChangedEvent
}

export function createBuyOfferCanceledEvent(
  offerId: BigInt,
  timestamp: BigInt
): BuyOfferCanceled {
  let buyOfferCanceledEvent = changetype<BuyOfferCanceled>(newMockEvent())

  buyOfferCanceledEvent.parameters = new Array()

  buyOfferCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferCanceledEvent
}

export function createBuyOfferCollateralAddedEvent(
  offerId: BigInt,
  amount: BigInt,
  amountId: i32,
  timestamp: BigInt
): BuyOfferCollateralAdded {
  let buyOfferCollateralAddedEvent = changetype<BuyOfferCollateralAdded>(
    newMockEvent()
  )

  buyOfferCollateralAddedEvent.parameters = new Array()

  buyOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  buyOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "amountId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(amountId))
    )
  )
  buyOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferCollateralAddedEvent
}

export function createBuyOfferCreatedEvent(
  offerId: BigInt,
  buying: BigInt,
  buyingId: i32,
  buyingFor: BigInt,
  buyingForId: i32,
  exRate: BigInt,
  collateralId: i32,
  repayInSeconds: BigInt,
  buyer: Address,
  timestamp: BigInt
): BuyOfferCreated {
  let buyOfferCreatedEvent = changetype<BuyOfferCreated>(newMockEvent())

  buyOfferCreatedEvent.parameters = new Array()

  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("buying", ethereum.Value.fromUnsignedBigInt(buying))
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyingId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(buyingId))
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyingFor",
      ethereum.Value.fromUnsignedBigInt(buyingFor)
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyingForId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(buyingForId))
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("exRate", ethereum.Value.fromUnsignedBigInt(exRate))
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(collateralId))
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "repayInSeconds",
      ethereum.Value.fromUnsignedBigInt(repayInSeconds)
    )
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferCreatedEvent
}

export function createBuyOfferForfeitedEvent(
  offerId: BigInt,
  timestamp: BigInt
): BuyOfferForfeited {
  let buyOfferForfeitedEvent = changetype<BuyOfferForfeited>(newMockEvent())

  buyOfferForfeitedEvent.parameters = new Array()

  buyOfferForfeitedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferForfeitedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferForfeitedEvent
}

export function createBuyOfferLiquidatedEvent(
  offerId: BigInt,
  liquidator: Address,
  timestamp: BigInt
): BuyOfferLiquidated {
  let buyOfferLiquidatedEvent = changetype<BuyOfferLiquidated>(newMockEvent())

  buyOfferLiquidatedEvent.parameters = new Array()

  buyOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  buyOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferLiquidatedEvent
}

export function createBuyOfferRepaidEvent(
  offerId: BigInt,
  amount: BigInt,
  amountId: i32,
  byPart: boolean,
  timestamp: BigInt
): BuyOfferRepaid {
  let buyOfferRepaidEvent = changetype<BuyOfferRepaid>(newMockEvent())

  buyOfferRepaidEvent.parameters = new Array()

  buyOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferRepaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  buyOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "amountId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(amountId))
    )
  )
  buyOfferRepaidEvent.parameters.push(
    new ethereum.EventParam("byPart", ethereum.Value.fromBoolean(byPart))
  )
  buyOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return buyOfferRepaidEvent
}

export function createBuyOfferSellerAddressChangedEvent(
  offerId: BigInt,
  newAddress: Address
): BuyOfferSellerAddressChanged {
  let buyOfferSellerAddressChangedEvent = changetype<
    BuyOfferSellerAddressChanged
  >(newMockEvent())

  buyOfferSellerAddressChangedEvent.parameters = new Array()

  buyOfferSellerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  buyOfferSellerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return buyOfferSellerAddressChangedEvent
}

export function createFeeAddressChangedEvent(
  newAddress: Address
): FeeAddressChanged {
  let feeAddressChangedEvent = changetype<FeeAddressChanged>(newMockEvent())

  feeAddressChangedEvent.parameters = new Array()

  feeAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return feeAddressChangedEvent
}

export function createNewTokenAddedEvent(
  tokenId: i32,
  tokenName: string,
  tokenAddress: Address,
  chainlinkOracleAddress: Address
): NewTokenAdded {
  let newTokenAddedEvent = changetype<NewTokenAdded>(newMockEvent())

  newTokenAddedEvent.parameters = new Array()

  newTokenAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenId))
    )
  )
  newTokenAddedEvent.parameters.push(
    new ethereum.EventParam("tokenName", ethereum.Value.fromString(tokenName))
  )
  newTokenAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  newTokenAddedEvent.parameters.push(
    new ethereum.EventParam(
      "chainlinkOracleAddress",
      ethereum.Value.fromAddress(chainlinkOracleAddress)
    )
  )

  return newTokenAddedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSaleOfferAcceptedEvent(
  offerId: BigInt,
  collateral: BigInt,
  collateralId: i32,
  buyer: Address,
  timestamp: BigInt
): SaleOfferAccepted {
  let saleOfferAcceptedEvent = changetype<SaleOfferAccepted>(newMockEvent())

  saleOfferAcceptedEvent.parameters = new Array()

  saleOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  saleOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "collateralId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(collateralId))
    )
  )
  saleOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  saleOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferAcceptedEvent
}

export function createSaleOfferBuyerAddressChangedEvent(
  offerId: BigInt,
  newAddress: Address
): SaleOfferBuyerAddressChanged {
  let saleOfferBuyerAddressChangedEvent = changetype<
    SaleOfferBuyerAddressChanged
  >(newMockEvent())

  saleOfferBuyerAddressChangedEvent.parameters = new Array()

  saleOfferBuyerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferBuyerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return saleOfferBuyerAddressChangedEvent
}

export function createSaleOfferCanceledEvent(
  offerId: BigInt,
  timestamp: BigInt
): SaleOfferCanceled {
  let saleOfferCanceledEvent = changetype<SaleOfferCanceled>(newMockEvent())

  saleOfferCanceledEvent.parameters = new Array()

  saleOfferCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferCanceledEvent
}

export function createSaleOfferCollateralAddedEvent(
  offerId: BigInt,
  amount: BigInt,
  amountId: BigInt,
  timestamp: BigInt
): SaleOfferCollateralAdded {
  let saleOfferCollateralAddedEvent = changetype<SaleOfferCollateralAdded>(
    newMockEvent()
  )

  saleOfferCollateralAddedEvent.parameters = new Array()

  saleOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  saleOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "amountId",
      ethereum.Value.fromUnsignedBigInt(amountId)
    )
  )
  saleOfferCollateralAddedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferCollateralAddedEvent
}

export function createSaleOfferCreatedEvent(
  offerId: BigInt,
  selling: BigInt,
  sellingId: i32,
  sellingFor: BigInt,
  sellingForId: i32,
  exRate: BigInt,
  repayInSeconds: BigInt,
  seller: Address,
  timestamp: BigInt
): SaleOfferCreated {
  let saleOfferCreatedEvent = changetype<SaleOfferCreated>(newMockEvent())

  saleOfferCreatedEvent.parameters = new Array()

  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "selling",
      ethereum.Value.fromUnsignedBigInt(selling)
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellingId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(sellingId))
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellingFor",
      ethereum.Value.fromUnsignedBigInt(sellingFor)
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellingForId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(sellingForId))
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("exRate", ethereum.Value.fromUnsignedBigInt(exRate))
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "repayInSeconds",
      ethereum.Value.fromUnsignedBigInt(repayInSeconds)
    )
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  saleOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferCreatedEvent
}

export function createSaleOfferForfeitedEvent(
  offerId: BigInt,
  timestamp: BigInt
): SaleOfferForfeited {
  let saleOfferForfeitedEvent = changetype<SaleOfferForfeited>(newMockEvent())

  saleOfferForfeitedEvent.parameters = new Array()

  saleOfferForfeitedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferForfeitedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferForfeitedEvent
}

export function createSaleOfferLiquidatedEvent(
  offerId: BigInt,
  liquidator: Address,
  timestamp: BigInt
): SaleOfferLiquidated {
  let saleOfferLiquidatedEvent = changetype<SaleOfferLiquidated>(newMockEvent())

  saleOfferLiquidatedEvent.parameters = new Array()

  saleOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  saleOfferLiquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferLiquidatedEvent
}

export function createSaleOfferRepaidEvent(
  offerId: BigInt,
  amount: BigInt,
  amountId: i32,
  byPart: boolean,
  timestamp: BigInt
): SaleOfferRepaid {
  let saleOfferRepaidEvent = changetype<SaleOfferRepaid>(newMockEvent())

  saleOfferRepaidEvent.parameters = new Array()

  saleOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferRepaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  saleOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "amountId",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(amountId))
    )
  )
  saleOfferRepaidEvent.parameters.push(
    new ethereum.EventParam("byPart", ethereum.Value.fromBoolean(byPart))
  )
  saleOfferRepaidEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return saleOfferRepaidEvent
}

export function createSaleOfferSellerAddressChangedEvent(
  offerId: BigInt,
  newAddress: Address
): SaleOfferSellerAddressChanged {
  let saleOfferSellerAddressChangedEvent = changetype<
    SaleOfferSellerAddressChanged
  >(newMockEvent())

  saleOfferSellerAddressChangedEvent.parameters = new Array()

  saleOfferSellerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "offerId",
      ethereum.Value.fromUnsignedBigInt(offerId)
    )
  )
  saleOfferSellerAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return saleOfferSellerAddressChangedEvent
}
