package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

@WebServlet("/contact")
public class FormHandlerServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        KeyFactory keyFactory = datastore.newKeyFactory().setKind("Submission");
        FullEntity submissionEntity = 
        Entity.newBuilder(keyFactory.newKey())
            .set("First Name",firstName)
            .set("Last Name", lastName)
            .set("Email", email)
            .set("Message", message)
            .build();
        datastore.put(submissionEntity);

        //Write the value to the response so the user can see it
        response.sendRedirect("/");
    }

}
