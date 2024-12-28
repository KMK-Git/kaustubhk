"""
CDK Application entry point.
"""

import os
import aws_cdk as cdk
from pipeline_stack.pipeline import PipelineStack
from pipeline_stages.static_website_deploy_stage import StaticWebsiteDeployStage

app = cdk.App()


PipelineStack(
    app,
    "PipelineStackMain",
    static_website_deploy_stage=StaticWebsiteDeployStage(
        app,
        "StaticWebsiteDeployStage",
        hostedzone_domain_name="kaustubhk.com",
        website_subdomain="",
        alternative_subdomains=["www"],
        env=cdk.Environment(
            account=os.environ["CDK_DEFAULT_ACCOUNT"],
            region=os.environ["CDK_DEFAULT_REGION"],
        ),
    ),
    env=cdk.Environment(
        account=os.environ["CDK_DEFAULT_ACCOUNT"],
        region=os.environ["CDK_DEFAULT_REGION"],
    ),
)

app.synth()
