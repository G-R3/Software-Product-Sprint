package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] quotes = {"I'll be back - The Terminator (1984)",
        "Houston, we have a problem - Apollo 13 (1995)", 
        "Here's Johnny! - The Shining (1980)", 
        "I know who I am. I'm the dude playing a dude disguised as another dude! - Tropic Thunder (2008)",
        "That's a bingo! - Inglourious Basterds (2009)", 
        "Look at me. I'm the captain now. - Captain Phillips (2013)",
        "I'm Groot - Guardians of the Galaxy (2014)"
    };
    String json = new Gson().toJson(quotes);
    
    response.setContentType("application/json");
    response.getWriter().println(json);
  }
}
