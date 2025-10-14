# Question
- Design a poll widget that can be easily embedded on websites, such as articles and blogs to allow visitors to vote.

## Requirements
The widget displays the following info:
- A list of options for users to vote on
    - The latest number of votes for each option
- The Following backend API are provided
    - Fetching of the poll results
    - Record a new vote on an poll
    - Remove a vote
- Should be plug and play for the website owner to consume the poll in their site


## (R) Requirements Exploration
- Critical aspects of the components
    - Ease of embedding of the widget in websites
    - UX as a voter

- Do we need to show the details of the voter?
    - For now just the vote count

- Voting on multiple options?
    - yes can vote on multiple options

- In what order the votes should be shown
    - Popularity

- How are the options determined, can user add more options?
- Max number of options?
- Should users be authenticated?



## (A) Architecture

### Rendering Approach
Generally speaking There are two approaches
1) iframe (different browser context)
2) Render within the website (same browser context)

Details about the above approaches
`iframe` tag