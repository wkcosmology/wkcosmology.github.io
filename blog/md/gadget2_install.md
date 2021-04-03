---
title: Install Gadget2 on Mac OS
date: 2021-04-02
description: How to install Gadget2 on Mac OS
tags: [Software, mac OS]
categories: [Astrophysics, Programming]
---

# Install

To install the Gadget2, you need to install MPI, fftw2, gsl and hdf5. Here I
install all of these by compiling the source code. To avoiding mixing with the
system's library, I put all these in a specified folder, and the structure is

```
/Users/wangk/Documents/Project/library/
├── bin
├── etc
├── include
├── lib
├── libsource
└── share
```

where the `libsource` is for the source code.

Another thing is that the default c/c++ compiler on Mac is clang/clang++, but I
prefer gcc/g++. So I install gcc/g++ using Homebrew. In the following content, I
will redirect the c/c++ compiler to gcc/g++.

## Open MPI

I chose Open MPI instead of MPICH because the later does not work on my computer
after installing. You can download it from
[Here](https://www.open-mpi.org/software/ompi/v4.0/). There are three steps to
install

```sh
./configure \
    CC=/usr/local/bin/gcc-9 \
    CXX=/usr/local/bin/g++-9 \
    --prefix=/Users/wangk/Documents/Project/library
make
make install
```

Here `CC` should link to the executable gcc and `CXX` should be executable g++.
The `--prefix` is tell the installing program where to put the products(it will
put the header file in `/location_of_prefix/include/`, the library in
`/location_of_prefix/lib/` and executable in `/location_of_prefix/bin/`)

> It will take a while to install Open MPI, since it is a big program.

## FFTW2

Gadget2 requires fftw2, and you can download it from
[here](http://www.fftw.org/download.html).

```sh
./configure \
    CC=/usr/local/bin/gcc-9 \
    --includedir=/Users/wangk/Documents/Project/library/include/fftw2 \
    --libdir=/Users/wangk/Documents/Project/library/lib/fftw2 \
    --enable-mpi \
    --enable-type-prefix \
    MPICC=/Users/wangk/Documents/Project/library/bin/mpicc
make
make install
make clean
./configure \
    CC=/usr/local/bin/gcc-9 \
    --includedir=/Users/wangk/Documents/Project/library/include/fftw2 \
    --libdir=/Users/wangk/Documents/Project/library/lib/fftw2 \
    --enable-mpi \
    --enable-float \
    --enable-type-prefix \
    MPICC=/Users/wangk/Documents/Project/library/bin/mpicc
make
make install
```

There are several tricky things here.

1. Gadget2 needs fftw2, but the newest is fftw3. Since I do not want to mess
   them up, I specify the include path and lib separately using `--includedir`
   and `--libdir`. And fftw will not generate anything in `etc/` and `share/`,
   so I do not need to specify their directory.
2. There are two kinds of precision for fftw, single and double.
   `--enable-type-prefix` is telling the installing program to distinguish them
   by adding a character, then you can install both the single version and the
   double version, separately. After the above installation, you can see the
   header file in `location_of_prefix/include/fftw2/` as

    ```
     dfftw.h  dfftw_mpi.h  drfftw.h  drfftw_mpi.h
     sfftw.h  sfftw_mpi.h  srfftw.h  srfftw_mpi.h
    ```

    The first installation will install the double version by default, and the
    second is for single precision, where you need to `--enable-float`. Also,
    you need to `make clean` before the second installation. By the way, when
    you choose to enable type prefix, you can not `#include <fftw.h>` in your
    program, you need `#include <sfftw.h>` or `#include <dfftw.h>` to specify
    the precision. Also, you need change `-lfftw` to `-lsfftw` or `-ldfftw` when
    you are compiling the program.

3. You need to enable the MPI for fftw, so you need to specify the path the mpi
   executable, which, in my case, is
   `MPICC=/Users/wangk/Documents/Project/library/bin/mpicc`

## GSL

You can download it from [Here](https://www.gnu.org/software/gsl/). The
installation is easy.

```sh
./configure \
    CC=/usr/local/bin/gcc-9 \
    CXX=/usr/local/bin/g++-9 \
    --prefix=/Users/wangk/Documents/Project/library
make
make install
```

## HDF5

You can download the source code
[Here](https://www.hdfgroup.org/downloads/hdf5/source-code/)

```sh
./configure \
    CC=/Users/wangk/Documents/Project/library/bin/mpicc \
    CXX=/usr/local/bin/g++-9 \
    --includedir=/Users/wangk/Documents/Project/library/include/hdf5 \
    --libdir=/Users/wangk/Documents/Project/library/lib/hdf5 \
    --enable-cxx
make
make install
```

There are several thing need to be noted

1. If you need the c++ interface, you need to `--enable-cxx` and you need to
   specify the c++ compiler, which in my case is `CXX=/usr/local/bin/g++-9`.
2. You cannot specify `--enable-cxx` and `--enable-parallel` simultaneously.
   Since I will not use the parallel IO, so I just enable c++ interface.

## Gadget2

After installing all the required package, it becomes quiet easy to install
Gadget2, where you can download it from
[here](https://wwwmpa.mpa-garching.mpg.de/gadget/).

I uncommented or modified the following things. (It works, but I am not sure if
they are necessary, you should read the manual)

```makefile
OPT += -DDOUBLEPRECISION_FFTW

CC = /Users/wangk/Documents/Project/library/bin/mpicc # sets the C-compiler
OPTIMIZE =  -O3 -Wall -g -DH5_USE_16_API # sets optimization and warning flags

SYSTYPE="KAI"

ifeq ($(SYSTYPE),"KAI")
CC       =  /Users/wangk/Documents/Project/library/bin/mpicc
OPTIMIZE =  -O3 -Wall -DH5_USE_16_API
GSL_INCL =  -I/Users/wangk/Documents/Project/library/include
GSL_LIBS =  -L/Users/wangk/Documents/Project/library/lib
FFTW_INCL=  -I/Users/wangk/Documents/Project/library/include/fftw2
FFTW_LIBS=  -L/Users/wangk/Documents/Project/library/lib/fftw2
MPICHLIB =  -L/Users/wangk/Documents/Project/library/lib
HDF5INCL =  -I/Users/wangk/Documents/Project/library/include/hdf5
HDF5LIB  =  -L/Users/wangk/Documents/Project/library/lib/hdf5 -lhdf5 -lz
endif
```

Then, you can run Gadget2 using the provided example and initial condition. Have
fun!
