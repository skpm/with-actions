import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  sketch.UI.message("It's alive 🙌")
}

export function onOpenDocument(context){
  console.log(`Action name: ${context.actionContext.name}`)
  console.log(`Action: ${context.actionContext}`)
  // Do something here
  // For a general overview of the Actions API, check https://developer.sketch.com/plugins/actions
  // For a complete list of other Actions, check https://developer.sketch.com/reference/action/
}
