import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

export default function ButtonCard(props) {
  return (
    <Box
      borderRadius={4}
      bgcolor="background.paper"
      p={{ xs: "4rem 1rem", sm: "5rem 2rem", md: "5rem 2rem", lg: "5rem 2.2rem" }}
      maxWidth={{ sm: "30rem" }}
      marginX={{ sm: "auto" }}
      boxShadow={3}
    >
      {props.children}
      <Box paddingTop="1.6rem">
        <Button variant="contained" color="secondary" href={props.href || ''} target={props.target || 'new'}>
          {props.buttonContent}
        </Button>
      </Box>
    </Box>
  )
  
}
