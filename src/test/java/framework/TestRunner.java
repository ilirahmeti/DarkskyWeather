package framework;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/site/cucumber-pretty"},
        snippets = SnippetType.CAMELCASE,

        features = {"src/test/Resources/Features"},
<<<<<<< HEAD
        tags = {"@regression"},
=======
        tags = {"@Darksky"},
>>>>>>> 2b99fe0cb4af94feeff89402d13bfb3501af0583
        glue = {"stepdefinition"}
)

public class TestRunner {

}
