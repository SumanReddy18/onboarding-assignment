require_relative 'lib/player'
require_relative 'lib/game'

def main
  puts "Enter number of players: "
  number_of_players = gets.chomp.to_i

  player_names = []
  number_of_players.times do |i|
    print "Enter player #{i + 1}'s name: "
    name = gets.chomp
    player_names << name
  end

  # Initialize the game with the player names
  game = Game.new(player_names)
  game.play
end

main
