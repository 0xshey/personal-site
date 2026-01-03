---
title: "Projecting NBA Fantasy Points"
date: "2026-01-03"
excerpt: ""
---

# What is Yahoo's projected fantasy points?

NBA Fantasy manager's using Yahoo's app have definitely seen the little gray, green or red fantasy points value that indicates the estimation of how well their lineups will perform for their current week's matchup. This value is typically calculated using a sum of the projected fantasy points for each player on the lineups. The question is, how is the value determined for a particular player for a particular game?

## My interpretation of how the formula works

Yahoo does not seem to publish a formula for its projected FP formula, but I have made an attempt to reverse engineer it.

$$
\text{Projected FP} = (\text{FP per opportunity} \times \text{opportunities per game}) + \text{opponent matchup factor}
$$

- **FP per opportunity:** The average number of fantasy points the player has scored per opportunity (e.g., per game, per minute, etc.)
- **Opportunities per game:** The number of opportunities the player has per game (e.g., per game, per minute, etc.)
- **Opponent matchup factor:** A factor that accounts for the effect of the opponent the player is facing (e.g., per game, per minute, etc.)

## Example

_This is not a real statistical example_
The facts we need to assess a real scenario:

- Player's FP per minute (season)
- Player's FP per minute (Last 10 or Last 5 games)
- Player's average minutes per game (we could use usage rate statistics here if available)
- A factor that indicates the strength of the opponent the player is facing: Points allowed vs league average (% difference) ?

# Why would the formula for FP projection need to be reassessed?

As someone who has used Yahoo's projected fantasy points for years, I have always been curious how a singular value could be determined for a player's performance for a single game and a week, especially with so many factors to consider. Any statistics expert may cringe when they see a single value that is detailed down to two decimal points used to project something with such uncertainty.
