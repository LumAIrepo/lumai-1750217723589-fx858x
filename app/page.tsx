import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Lock, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">StreamFlow Clone</h1>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => alert('Connect Wallet')}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Stream Tokens with Real-Time Precision
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The most advanced token streaming and vesting platform on Solana. Create payment streams, manage vesting schedules, and handle treasury operations with unprecedented control.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-12">
            <div>
              <span className="text-2xl font-bold text-green-400">$2.5B+</span>
              <div>Streamed</div>
            </div>
            <div>
              <span className="text-2xl font-bold text-blue-400">45K+</span>
              <div>Active Users</div>
            </div>
            <div>
              <span className="text-2xl font-bold text-purple-400">99.9%</span>
              <div>Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Everything you need for token streaming
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Real-Time Streaming</CardTitle>
                <CardDescription className="text-gray-300">
                  Stream tokens by the second with precise timing and automatic execution
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <Lock className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Vesting Schedules</CardTitle>
                <CardDescription className="text-gray-300">
                  Create complex vesting schedules with cliffs, linear unlocks, and custom curves
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Treasury Management</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage organizational treasuries with multi-sig support and governance controls
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Create Stream Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Create a New Stream</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Set up a token stream in just a few clicks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Recipient Address
                    </label>
                    <Input 
                      placeholder="Enter Solana address" 
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Token Amount
                    </label>
                    <Input 
                      placeholder="0.00" 
                      type="number"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Start Date
                    </label>
                    <Input 
                      type="datetime-local"
                      className="bg-white/5 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Duration
                    </label>
                    <Input 
                      placeholder="30 days" 
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3"
                  onClick={() => alert('Stream created! (Demo mode)')}
                >
                  Create Stream
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 StreamFlow Clone. Built on Solana.
          </p>
        </div>
      </footer>
    </div>
  )
}