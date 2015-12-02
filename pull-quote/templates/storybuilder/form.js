define({
  return {
    "schema": "https://raw.githubusercontent.com/washingtonpost/ans-content-elements/master/pull-quote/schema.json",
    "form": [
      "content",
      {
        "type": "fieldset",
        "title": "Extra",
         "items": [
            {
               "type": "help",
               "helpvalue": "The rest of the form is entirely optional, feel free to ignore."
            },
            "quotee",
            "location",
            "link"
         ]
      },
      {
         "type": "submit",
         "title": "Make Fancy Quote"
      }
   ],
   "validate": true
  };
});
