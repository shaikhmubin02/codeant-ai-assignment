'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, KeyRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SignInPage = () => {
  const [selectedTab, setSelectedTab] = useState("saas"); 

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Stats Section - Hidden on mobile */}
      <div className="hidden lg:flex flex-1 bg-white flex-col items-center justify-center relative">
        <div className="space-y-4 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25),0_0_25px_-5px_rgba(0,0,0,0.15)] relative z-10 bg-white mb-40">
          <div className="flex items-center gap-1 mt-3 ml-3">
            <Image
              src="/logo.png"
              alt="AI Logo"
              width={25}
              height={25}
              className="rounded"
            />
            <span className="font-semibold text-sm mt-2">AI to Detect & Autofix Bad Code</span>
          </div>
      
          <div className="border b"></div>
      
          <div className="grid grid-cols-3">
            <div className="p-3">
              <div className="flex justify-center font-semibold text-sm">30+</div>
              <div className="flex justify-center text-xs text-black">
                Language Support
              </div>
            </div>
            <div className="p-3">
              <div className="flex justify-center font-semibold text-sm">10K+</div>
              <div className="flex justify-center text-xs text-black">Developers</div>
            </div>
            <div className="p-3">
              <div className="flex justify-center font-semibold text-sm">100K+</div>
              <div className="flex justify-center text-xs text-black">Hours Saved</div>
            </div>
          </div>
        </div>
      
        <div
          className="space-y-4 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.25),0_0_25px_-5px_rgba(0,0,0,0.15)] mt-12 ml-52 absolute top-[50%] transform -translate-y-1/2 bg-white p-4 z-20"
          style={{ width: "200px", height: "140px" }}
        >
          <div className="flex items-center gap-8 ml-2 -mt-2">
            <Image
              src="/states.png"
              alt="AI Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div className="flex flex-col items-center text-xs text-blue-800">
              <div className="flex items-center font-semibold">
                <ArrowUp className="w-4 h-4 mr-1" />
                14%
              </div>
              <span className="ml-1 text-black">This week</span>
            </div>
          </div>
          <div className="flex justify-start items-start">
            <div className="ml-2">
              <div className="flex justify-center text-xs font-semibold">
                Issues Fixed
              </div>
              <div className="flex justify-center text-2xl font-semibold">
                500K+
              </div>
            </div>
          </div>
        </div>

        <Image 
          src='/logo-1.png' 
          alt="logo-1" 
          width={300}
          height={300}
          className="absolute bottom-0 left-0"
        />
      </div>

      {/*Sign-In Section */}
      <div className="flex-1 bg-gray-50 flex items-center justify-center min-h-screen w-full">
        <div className="w-full px-4 py-8 lg:p-8">
          <Card className="bg-white p-4 lg:p-6 mx-auto max-w-[600px] w-full h-[500px]">
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <div className="flex justify-center mb-6">
                  <Image src="/logo.png" alt="logo" width={30} height={30} />
                  <span className="font-light text-xl">CodeAnt AI</span>
                </div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome to CodeAnt AI
                </h1>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="saas" className="w-full lg:w-3/4 mx-auto">
                <TabsList className="grid w-full grid-cols-2 p-0 border rounded-lg">
                  <TabsTrigger
                    value="saas"
                    onClick={()=> setSelectedTab("saas")}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 rounded-lg text-black"
                  >
                    SAAS
                  </TabsTrigger>
                  <TabsTrigger
                    value="self-hosted"
                    onClick={()=> setSelectedTab("self-hosted")}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-2 rounded-lg text-black"
                  >
                    Self Hosted
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="border b"></div>

              {/* Sign-In Options */}
              <div className="space-y-4 mx-auto w-full lg:w-[300px]">
                {selectedTab === 'saas' && (
                  <>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Image
                        src="/github.png"
                        alt="Bitbucket"
                        width={16}
                        height={16}
                        className="rounded"
                      />
                      Sign in with GitHub
                    </Button>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Image
                        src="/bitbucket.png"
                        alt="Bitbucket"
                        width={16}
                        height={16}
                        className="rounded"
                      />
                      Sign in with Bitbucket
                    </Button>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Image
                        src="/azuredevops.jpg"
                        alt="Azure DevOps"
                        width={16}
                        height={16}
                        className="rounded"
                      />
                      Sign in with Azure DevOps
                    </Button>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Image
                        src="/gitlab.png"
                        alt="GitLab"
                        width={16}
                        height={16}
                        className="rounded"
                      />
                      Sign in with GitLab
                    </Button>
                  </>
                )}
                {selectedTab === 'self-hosted' && (
                  <>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <Image
                        src="/gitlab.png"
                        alt="GitLab"
                        width={16}
                        height={16}
                        className="rounded"
                      />
                      Sign in with GitLab
                    </Button>
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <KeyRound className="h-5 w-5 "/>
                      Sign in with SSO
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
          {/* Privacy Policy */}
          <div className="text-center text-sm text-gray-800 mt-6">
            By signing up you agree to the{" "}
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;