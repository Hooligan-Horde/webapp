/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "CrossAnchorBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossAnchorBridge__factory>;
    getContractFactory(
      name: "WormholeCoreBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WormholeCoreBridge__factory>;
    getContractFactory(
      name: "WormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WormholeTokenBridge__factory>;
    getContractFactory(
      name: "CrossAnchorBridgeV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossAnchorBridgeV2__factory>;
    getContractFactory(
      name: "WormholeCoreBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WormholeCoreBridge__factory>;
    getContractFactory(
      name: "WormholeTokenBridge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WormholeTokenBridge__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "CrossAnchorBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossAnchorBridge>;
    getContractAt(
      name: "WormholeCoreBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WormholeCoreBridge>;
    getContractAt(
      name: "WormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WormholeTokenBridge>;
    getContractAt(
      name: "CrossAnchorBridgeV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossAnchorBridgeV2>;
    getContractAt(
      name: "WormholeCoreBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WormholeCoreBridge>;
    getContractAt(
      name: "WormholeTokenBridge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WormholeTokenBridge>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
