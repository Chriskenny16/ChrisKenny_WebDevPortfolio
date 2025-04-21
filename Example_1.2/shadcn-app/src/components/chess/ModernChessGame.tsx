import React, { useState, useEffect, useCallback } from "react";
import { Chessboard } from "react-chessboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dynamically import chess.js
// @ts-ignore - needed because Chess.js has mixed ESM/CommonJS exports
import * as ChessJS from 'chess.js';
const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

interface ChessGameProps {
  width?: number;
}

export function ModernChessGame({ width = 400 }: ChessGameProps) {
  // State
  const [game, setGame] = useState<any>(null);
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [gameStatus, setGameStatus] = useState("");
  
  // Initialize game
  useEffect(() => {
    setGame(new Chess());
  }, []);
  
  // Check if game is over
  const checkGameStatus = useCallback((chessInstance: any) => {
    if (chessInstance.isCheckmate?.()) {
      setGameStatus("Checkmate!");
      return true;
    } else if (chessInstance.in_checkmate?.()) {
      setGameStatus("Checkmate!");
      return true;
    }
    
    if (chessInstance.isDraw?.() || chessInstance.in_draw?.()) {
      setGameStatus("Game over - Draw");
      return true;
    }
    
    if (chessInstance.isStalemate?.() || chessInstance.in_stalemate?.()) {
      setGameStatus("Game over - Stalemate");
      return true;
    }
    
    if (chessInstance.isThreefoldRepetition?.() || chessInstance.in_threefold_repetition?.()) {
      setGameStatus("Game over - Draw by repetition");
      return true;
    }
    
    if (chessInstance.isCheck?.() || chessInstance.in_check?.()) {
      setGameStatus("Check!");
      return false;
    }
    
    setGameStatus("");
    return false;
  }, []);
  
  // Make a random move for the computer
  const makeRandomMove = useCallback(() => {
    if (!game) return;
    
    const possibleMoves = game.moves();
    
    // Exit if the game is over
    if (possibleMoves.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    
    // Make the move
    game.move(possibleMoves[randomIndex]);
    setFen(game.fen());
    
    // Check if game is over
    checkGameStatus(game);
  }, [game, checkGameStatus]);
  
  // Handle player moves
  const onDrop = (sourceSquare: string, targetSquare: string) => {
    if (!game) return false;
    
    try {
      // Make the move
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q' // Always promote to a queen for simplicity
      });
      
      // If move is invalid
      if (move === null) return false;
      
      // Update board
      setFen(game.fen());
      
      // Check if game is over
      const isGameOver = checkGameStatus(game);
      
      // Make a move for the computer
      if (!isGameOver) {
        setTimeout(makeRandomMove, 300);
      }
      
      return true;
    } catch (e) {
      return false;
    }
  };
  
  // Reset the game
  const resetGame = () => {
    if (!game) return;
    
    game.reset();
    setFen(game.fen());
    setGameStatus("");
  };
  
  return (
    <Card className="chess-card w-full max-w-[500px]">
      <CardHeader className="chess-header">
        <CardTitle className="chess-title">Chess Game</CardTitle>
        <button 
          onClick={resetGame}
          className="reset-button"
        >
          Reset Game
        </button>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="chess-board-container">
          <Chessboard
            position={fen}
            onPieceDrop={onDrop}
            boardWidth={width}
            customBoardStyle={{
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
        {gameStatus && (
          <div className="game-status">
            {gameStatus}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 