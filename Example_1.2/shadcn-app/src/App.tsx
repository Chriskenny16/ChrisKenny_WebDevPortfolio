import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ModernChessGame } from "@/components/chess/ModernChessGame"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Chess Game</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Play</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bootstrap Alert */}
        <div className="alert alert-primary mb-4" role="alert">
          Welcome to the Chess Game! This site combines Tailwind CSS and Bootstrap components.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            {/* Tailwind Card */}
            <Card className="p-6 bg-[#2c3e50] border-[#2d3748] mb-4">
              <h2 className="text-xl font-semibold mb-4 text-[#e5e7eb]">Game Controls</h2>
              <div className="space-y-4">
                <div className="counter p-4 bg-[#2c3e50] rounded-lg shadow-sm border border-[#2d3748]">
                  <h3 className="text-lg font-medium mb-2 text-[#e5e7eb]">Counter Example</h3>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setCount((count) => count - 1)}
                      className="text-[#e5e7eb] border-[#4b7399] hover:bg-[#4b7399] hover:text-white"
                    >
                      -
                    </Button>
                    <span className="text-xl font-semibold text-[#e5e7eb]">{count}</span>
                    <Button
                      variant="outline"
                      onClick={() => setCount((count) => count + 1)}
                      className="text-[#e5e7eb] border-[#4b7399] hover:bg-[#4b7399] hover:text-white"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bootstrap Card */}
            <div className="card text-white bg-dark mb-4">
              <div className="card-header">
                Featured Controls
              </div>
              <div className="card-body">
                <h5 className="card-title">Special Features</h5>
                <p className="card-text">Use Bootstrap components alongside Tailwind CSS to create a unique UI.</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">Primary</button>
                  <button className="btn btn-secondary" type="button">Secondary</button>
                  <button className="btn btn-success" type="button">Success</button>
                  <button className="btn btn-danger" type="button">Danger</button>
                </div>
              </div>
            </div>

            {/* Bootstrap Progress */}
            <div className="card text-white bg-dark">
              <div className="card-header">
                Game Progress
              </div>
              <div className="card-body">
                <h5 className="card-title">Your Progress</h5>
                <div className="mb-3">
                  <label className="form-label">Beginner Level</label>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Intermediate Level</label>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: "45%" }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                  </div>
                </div>
                <div>
                  <label className="form-label">Advanced Level</label>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content - Chess board */}
          <div className="lg:col-span-2">
            <ModernChessGame width={600} />
            
            {/* Bootstrap Buttons below chess board */}
            <div className="d-flex justify-content-center gap-2 mt-4">
              <button type="button" className="btn btn-outline-light">New Game</button>
              <button type="button" className="btn btn-outline-info">Analysis</button>
              <button type="button" className="btn btn-outline-warning">Save Game</button>
              <button type="button" className="btn btn-outline-danger">Surrender</button>
            </div>
          </div>
        </div>
      </main>

      {/* Bootstrap Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-8">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Chess Game</h5>
              <p className="small">A beautiful chess game built with React, Tailwind CSS, and Bootstrap.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white-50">Home</a></li>
                <li><a href="#" className="text-white-50">About</a></li>
                <li><a href="#" className="text-white-50">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-white-50"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white-50"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white-50"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="small mb-0">&copy; 2023 Chess Game. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
