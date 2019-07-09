import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  sketch.UI.message("It's alive 🙌")
}

export function ActionHandler(context){
  console.log(`Action name: ${context.actionContext.name}`)
  console.log(`Action: ${context.actionContext}`)
  // Do something here
}
