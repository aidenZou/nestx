package org.openapitools.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.NativeWebRequest;
import java.util.Optional;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2019-04-21T15:04:16.680Z[Etc/UTC]")

@Controller
@RequestMapping("${openapi.restApiInterface.base-path:}")
public class NameApiController implements NameApi {

    private final NativeWebRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public NameApiController(NativeWebRequest request) {
        this.request = request;
    }

    @Override
    public Optional<NativeWebRequest> getRequest() {
        return Optional.ofNullable(request);
    }

}