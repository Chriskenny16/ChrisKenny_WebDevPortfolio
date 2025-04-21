import React, { useState, useEffect } from "react";
import Chessboard from "chessboardjsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This is a workaround for chess.js with Vite
// @ts-ignore
import * as ChessJS from 'chess.js';
const Chess = typeof ChessJS === 'function' ? ChessJS : ChessJS.Chess;

interface ChessGameProps {
  width?: number;
}

export function ChessGame({ width = 400 }: ChessGameProps) {
  const [chess, setChess] = useState<any>(null);
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [gameState, setGameState] = useState<string>("");
  
  useEffect(() => {
    // Initialize the chess instance in the client
    if (typeof window !== 'undefined') {
      try {
        const chessInstance = new Chess();
        setChess(chessInstance);
      } catch (error) {
        console.error("Failed to initialize chess:", error);
      }
    }
  }, []);
  
  // Handle the player's move
  const handleMove = (move: any) => {
    if (!chess) return;
    
    // Validate the player's move
    if (chess.move(move)) {
      // Update the board state
      setFen(chess.fen());
      
      // Check game status - using method names from latest chess.js
      if (chess.isCheckmate?.()) {
        setGameState("Checkmate! You win!");
        return;
      } else if (chess.in_checkmate?.()) {
        setGameState("Checkmate! You win!");
        return;
      }
      
      if (chess.isDraw?.() || chess.in_draw?.()) {
        setGameState("Game ended in draw");
        return;
      }
      
      if (chess.isStalemate?.() || chess.in_stalemate?.()) {
        setGameState("Game ended in stalemate");
        return;
      }
      
      if (chess.isThreefoldRepetition?.() || chess.in_threefold_repetition?.()) {
        setGameState("Game ended in draw by repetition");
        return;
      }
      
      // Make AI move after a short delay
      setTimeout(() => {
        if (!chess) return;
        
        const moves = chess.moves();
        
        if (moves.length > 0) {
          // AI makes a random move
          const computerMove = moves[Math.floor(Math.random() * moves.length)];
          chess.move(computerMove);
          setFen(chess.fen());
          
          // Check game status after AI move - handling both old and new method names
          if (chess.isCheckmate?.() || chess.in_checkmate?.()) {
            setGameState("Checkmate! AI wins!");
          } else if (chess.isDraw?.() || chess.in_draw?.()) {
            setGameState("Game ended in draw");
          } else if (chess.isStalemate?.() || chess.in_stalemate?.()) {
            setGameState("Game ended in stalemate");
          } else if (chess.isThreefoldRepetition?.() || chess.in_threefold_repetition?.()) {
            setGameState("Game ended in draw by repetition");
          } else if (chess.isCheck?.() || chess.in_check?.()) {
            setGameState("You are in check!");
          } else {
            setGameState("");
          }
        }
      }, 300);
    }
  };
  
  const resetGame = () => {
    if (!chess) return;
    
    chess.reset();
    setFen(chess.fen());
    setGameState("");
  };
  
  return (
    <Card className="w-full max-w-[500px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Chess Game</span>
          <button 
            onClick={resetGame}
            className="px-3 py-1 text-sm bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md"
          >
            Reset Game
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="chess-board-container">
          <Chessboard
            width={width}
            position={fen}
            onDrop={(move) => 
              handleMove({
                from: move.sourceSquare,
                to: move.targetSquare,
                promotion: "q", // Always promote to a queen for simplicity
              })
            }
          />
        </div>
        {gameState && (
          <div className="mt-4 text-center font-semibold text-lg">
            {gameState}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 