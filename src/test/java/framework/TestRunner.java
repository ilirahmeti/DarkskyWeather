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
        tags = {"@Darksky"},
        glue = {"stepdefinition"}
)

public class TestRunner {

}
