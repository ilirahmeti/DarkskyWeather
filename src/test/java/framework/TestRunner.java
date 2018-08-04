package framework;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/site/cucumber-pretty"},
        //This create auto method name in camelCase
        snippets = cucumber.api.SnippetType.CAMELCASE,

        features = {"src/test/Resources/features"},
        // Specify tags to be executed
<<<<<<< HEAD
        tags = {"@Darksky-3"},
=======
        tags = {"@Darksky-1"},
>>>>>>> 163477254304bcd784140f2f7bd2b833dfa732cc
        //Specify step definition package name (Note: make sure to have this package on current directory)
        glue = {"stepdefinition"}
)

public class TestRunner {


}

