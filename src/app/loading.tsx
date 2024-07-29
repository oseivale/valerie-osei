"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

export function Loading() {
  return <>Loading...</>;
}

function LoadingPage() {

  return (
   
    <div style={{height: '100vh'}}>
      {/* <div>
        <div>Just give us a second.</div>
      </div> */}
      <div style={{margin: '0 auto', maxWidth: '500px', position: 'absolute', top: '50%', left: '50%', color: 'purple', textAlign: 'center'}}>
        {/* <Loading /> */}
        <Spinner />
        {/* <h3>Just a sec...</h3> */}
      </div>
    </div>
  );
}

export default LoadingPage;
