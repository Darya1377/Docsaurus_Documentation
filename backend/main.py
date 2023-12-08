from fastapi import FastAPI, File, UploadFile, Query, Body
from fastapi.responses import JSONResponse, FileResponse
from pydantic import BaseModel
import httpx
import json
import uuid
import requests
from PIL import Image
from io import BytesIO
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware

from starlette.middleware import Middleware
from PIL import ImageOps

app = FastAPI()

@app.post("/image")
async def invert_image(image: UploadFile = File(...)):
    with Image.open(image.file) as img:
        inverted_image = ImageOps.invert(img)
        inverted_image.save("inverted.jpg")
    return FileResponse("inverted.jpg", media_type="image/jpeg")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)