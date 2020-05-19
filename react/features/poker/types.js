// @flow

import * as actions from './actionTypes';

import { SUITS, SYMBOLS } from './constants'

type GameState = "none" | "running";
export type Suit = $Keys<typeof SUITS>;
export type Symbol = $Keys<typeof SYMBOLS>;
export type Action = $Values<typeof actions>

export type Game = {|
    id: string,
    ticks: ?number,
    state: GameState,
    start_amount: number,
    current_player: ?string,
    dealer: ?string,
    deck: ?Deck
|}

export type CommonState = {|
    game: Game,
    table: Array<Card>,
    players: { [string]: Player },
    lastModifiedBy: ?string
|}

export type Deck = {|
    nextIndex: number,
    cards: Array<CardSlot>
|}

export type CardSlot = {|
    card: Card,
    owner: ?string
|}

export type Card = {|
    suit: Suit,
    symbol: Symbol
|}

export type Player = {|
    amount: number,
    actions: Array<Action>,
|}

export type PokerState = {
    common: CommonState,
    nick: ?string
}
