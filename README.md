# Wa Tech App

- To get started run `pnpm install` and then `pnpm run dev`

- Requires node version lts/hydrogen (v18.20.4): if you use nvm to manage node versions, you can use `nvm use` to switch to this version

## Next steps

Not an exhaustive list, but here are some things that would enhance the app or need fixing:

- Add filtering and / search to the character list
- Add a list of page numbers to the Pagination component, so the user can jump directly to a specific page
- Make some of the components more generic such as the Modal - extract the logic to make it a reusable component
- Add more breakpoints and responsive styles
- Make the app accessible, run Lighthouse tests for suggestions
- Fix the modal so it covers the entire page on all screen sizes
- Modal should close on `esc` key press or clicking outside content
- Break styles into separate component stylesheets
- Make the app more attractive: 
  - put the heading in a nav bar with a star wars style font, maybe use a logo
  
## Learnings

- I have only a little experience with SCSS so I have tried to use some of the main features, but I'm sure I could do more with it
- For the size of this app I have use prop-drilling to handle the state, rather than use a context or other state management library
- I chose to use Typescript as I have been learning it over the past couple of months and this was a great opportunity to continue that learning
